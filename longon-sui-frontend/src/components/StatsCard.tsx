interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold text-indigo-900">{value}</p>
      </div>
      <Icon className="w-8 h-8 text-indigo-600" />
    </div>
  </div>
);

export default StatsCard;
