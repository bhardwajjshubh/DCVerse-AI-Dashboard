import AvatarCard from "./AvatarCard";

function AvatarGrid({ avatars }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Avatars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </div>
    </div>
  );
}

export default AvatarGrid;
