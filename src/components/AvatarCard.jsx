function AvatarCard({ avatar }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={avatar.image}
            alt={avatar.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {avatar.name}
            </h3>
            <p className="text-gray-600 text-sm">{avatar.description}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
            Edit
          </button>
          <span className="text-sm text-gray-500">ID: {avatar.id}</span>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
