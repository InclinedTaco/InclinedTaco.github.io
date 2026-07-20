type ProjectVisualProps = {
  variant: 'locomotion' | 'diffusion' | 'vision'
}

export function ProjectVisual({ variant }: ProjectVisualProps) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      <div className="visual-grid" />
      {variant === 'locomotion' && (
        <>
          <span className="path path-a" />
          <span className="path path-b" />
          <span className="robot-node node-a" />
          <span className="robot-node node-b" />
          <span className="payload" />
          <span className="axis-label">x / y / ψ</span>
        </>
      )}
      {variant === 'diffusion' && (
        <>
          <span className="signal signal-a" />
          <span className="signal signal-b" />
          <span className="signal signal-c" />
          <span className="sample sample-a" />
          <span className="sample sample-b" />
          <span className="sample sample-c" />
          <span className="axis-label">p(xₜ₊₁ | xₜ, uₜ)</span>
        </>
      )}
      {variant === 'vision' && (
        <>
          <span className="camera-frame" />
          <span className="focus-corner corner-a" />
          <span className="focus-corner corner-b" />
          <span className="focus-corner corner-c" />
          <span className="focus-corner corner-d" />
          <span className="gesture-point point-a" />
          <span className="gesture-point point-b" />
          <span className="gesture-line" />
          <span className="axis-label">ROI / OCR / SLM</span>
        </>
      )}
    </div>
  )
}
