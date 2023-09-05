import * as THREE from 'three';
import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

export interface LogoThreeProps {
  size: number;
  className?: string;
}

const LogoThreeWrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const Canvas = styled.canvas`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoThree: React.FC<LogoThreeProps> = (props) => {
  const canvas = createRef<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvas.current,
    });

    renderer.setSize(props.size * 3.5, props.size * 3.5);
    renderer.setPixelRatio((window.devicePixelRatio || 1) * 2);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, (props.size * 3.5) / (props.size * 3.5), 0.1, 1000);

    camera.position.z = 700;

    const rectangle = (ctx: any, x: number, y: number, width: number, height: number, radius: number) => {
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
      ctx.lineTo(x + width - radius, y + height);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
      ctx.lineTo(x + width, y + radius);
      ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
      ctx.lineTo(x + radius, y);
      ctx.quadraticCurveTo(x, y, x, y + radius);
    };

    const rectangleReverse = (ctx: any, x: number, y: number, width: number, height: number, radius: number) => {
      ctx.moveTo(x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    };

    const rect = new THREE.Shape();
    rectangle(rect, -72, -72, 144, 144, 66);
    const rectSmall = new THREE.Path();
    rectangleReverse(rectSmall, -60, -60, 120, 120, 52);
    rect.holes.push(rectSmall);

    const shape = new THREE.ExtrudeBufferGeometry(rect, {
      curveSegments: 24,
      depth: 8,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 10,
      bevelSize: 6,
      bevelThickness: 6,
    });

    shape.center();

    const material = new THREE.MeshPhongMaterial({
      color: 0x008ffd,
      shininess: 20,
    });
    const donut = new THREE.Mesh(shape, material);

    donut.castShadow = true;
    donut.receiveShadow = true;

    scene.add(donut);

    const planeGeometry = new THREE.PlaneGeometry(400, 400);
    const planeMaterial = new THREE.ShadowMaterial();

    planeMaterial.opacity = 0.05;

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.z = -120;
    plane.receiveShadow = true;
    scene.add(plane);

    const lightFront = new THREE.DirectionalLight(0xffffff, 0.5);
    lightFront.position.set(0, 50, 300);
    lightFront.castShadow = true;

    const d = 200;
    lightFront.shadow.camera.left = -d;
    lightFront.shadow.camera.right = d;
    lightFront.shadow.camera.top = d;
    lightFront.shadow.camera.bottom = -d;

    lightFront.shadow.mapSize.width = 1024;
    lightFront.shadow.mapSize.height = 1024;

    const lightTop = new THREE.DirectionalLight(0xffffff, 0.5);
    lightTop.position.set(0, 400, 40);

    scene.add(lightFront);
    scene.add(lightTop);

    scene.add(new THREE.AmbientLight(0x0184fa));

    const render = () => {
      // requestAnimationFrame(render);

      renderer.render(scene, camera);
    };

    render();
  }, []);

  return (
    <LogoThreeWrapper className={props.className} size={props.size}>
      <Canvas ref={canvas} />
    </LogoThreeWrapper>
  );
};
