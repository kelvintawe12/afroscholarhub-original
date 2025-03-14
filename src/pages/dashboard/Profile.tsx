import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Camera, Edit2, Save, X } from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+234 800 000 0000',
    location: 'Lagos, Nigeria',
    bio: 'Passionate about education and helping others achieve their dreams.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });
  const [editedProfile, setEditedProfile] = useState(profile);
  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };
  return <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2B463C]">Profile</h1>
          {!isEditing ? <button onClick={() => setIsEditing(true)} className="flex items-center px-4 py-2 text-sm text-[#2B463C] hover:bg-gray-100 rounded-lg transition-colors">
              <Edit2 size={16} className="mr-2" />
              Edit Profile
            </button> : <div className="flex space-x-2">
              <button onClick={handleSave} className="flex items-center px-4 py-2 text-sm text-white bg-[#2B463C] rounded-lg hover:bg-opacity-90 transition-colors">
                <Save size={16} className="mr-2" />
                Save
              </button>
              <button onClick={handleCancel} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <X size={16} className="mr-2" />
                Cancel
              </button>
            </div>}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-32 bg-[#2B463C]">
            <div className="absolute -bottom-16 left-6">
              <div className="relative">
                <img src={profile.avatar} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white" />
                {isEditing && <button className="absolute bottom-0 right-0 p-2 bg-[#FFD700] rounded-full text-[#2B463C] hover:bg-opacity-90 transition-colors">
                    <Camera size={16} />
                  </button>}
              </div>
            </div>
          </div>
          {/* Profile Content */}
          <div className="pt-20 p-6">
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  {isEditing ? <input type="text" value={editedProfile.name} onChange={e => setEditedProfile({
                  ...editedProfile,
                  name: e.target.value
                })} className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" /> : <div className="flex items-center">
                      <User size={16} className="text-gray-400 mr-2" />
                      <span>{profile.name}</span>
                    </div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  {isEditing ? <input type="email" value={editedProfile.email} onChange={e => setEditedProfile({
                  ...editedProfile,
                  email: e.target.value
                })} className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" /> : <div className="flex items-center">
                      <Mail size={16} className="text-gray-400 mr-2" />
                      <span>{profile.email}</span>
                    </div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  {isEditing ? <input type="tel" value={editedProfile.phone} onChange={e => setEditedProfile({
                  ...editedProfile,
                  phone: e.target.value
                })} className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" /> : <div className="flex items-center">
                      <Phone size={16} className="text-gray-400 mr-2" />
                      <span>{profile.phone}</span>
                    </div>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  {isEditing ? <input type="text" value={editedProfile.location} onChange={e => setEditedProfile({
                  ...editedProfile,
                  location: e.target.value
                })} className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" /> : <div className="flex items-center">
                      <MapPin size={16} className="text-gray-400 mr-2" />
                      <span>{profile.location}</span>
                    </div>}
                </div>
              </div>
              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                {isEditing ? <textarea value={editedProfile.bio} onChange={e => setEditedProfile({
                ...editedProfile,
                bio: e.target.value
              })} rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]" /> : <p className="text-gray-600">{profile.bio}</p>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>;
};
export default Profile;