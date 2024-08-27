const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute  inset-0 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200"></div>
      <div className="absolute  inset-0 bg-pattern opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;