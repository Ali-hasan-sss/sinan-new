import Layer from '@/legacy-imports/Layer1';

export function InteractivePolyBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Layer />
    </div>
  );
}