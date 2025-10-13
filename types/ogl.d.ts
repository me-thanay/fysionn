declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement; getExtension(name: string): any };
    dpr: number;
    constructor(options?: { dpr?: number; alpha?: boolean });
    setSize(width: number, height: number): void;
    render(args: { scene: any; camera?: any }): void;
  }

  export class Program {
    constructor(gl: WebGLRenderingContext, options: { vertex: string; fragment: string; uniforms?: any });
  }

  export class Triangle {
    constructor(gl: WebGLRenderingContext);
  }

  export class Mesh {
    constructor(gl: WebGLRenderingContext, options: { geometry: any; program: any });
  }
}
