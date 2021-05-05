import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./config/particle-config"

export default function ParticleBackground({children}) {
    return (
        <div style={{ position: 'relative' }}>
      <Particles
        params={ParticleConfig}
        style={{
          position: 'absolute',
          width: "100%",
          zIndex:-1,
          left: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
    );
}

