function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
        {title}
      </h3>

      <p className="text-4xl font-bold text-gray-800 mt-3">
        {value}
      </p>
    </div>
  );
}

export default StatCard;