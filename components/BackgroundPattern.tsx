
export const BackgroundPattern = ({ sectionTops = [] }) => {
  return (
    <>
      {/* Dotted grid */}
      <div
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#808080 1px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      
    </>
  );
};