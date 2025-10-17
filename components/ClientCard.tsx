
import React from 'react';
import { Client, ClientStatus } from '../types';
import { MailIcon, PhoneIcon, TargetIcon, CalendarIcon, PencilIcon, TrashIcon } from './Icons';

interface ClientCardProps {
  client: Client;
  onEdit: () => void;
  onDelete: () => void;
}

const statusColors: { [key in ClientStatus]: string } = {
  [ClientStatus.Active]: 'bg-green-500/20 text-green-400 border border-green-500/30',
  [ClientStatus.Paused]: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  [ClientStatus.Completed]: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
};

const ClientCard: React.FC<ClientCardProps> = ({ client, onEdit, onDelete }) => {
  return (
    <div className="bg-black/30 rounded-lg p-6 flex flex-col justify-between border border-accent-cream/10 hover:border-accent-cream/30 transition-all duration-300 shadow-lg hover:shadow-primary-red/20">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-accent-cream">{client.name}</h3>
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusColors[client.status]}`}>
            {client.status}
          </span>
        </div>

        <div className="space-y-3 text-accent-cream/80 text-sm">
          <div className="flex items-center"><MailIcon className="w-4 h-4 mr-3 text-primary-red" /><span>{client.email}</span></div>
          <div className="flex items-center"><PhoneIcon className="w-4 h-4 mr-3 text-primary-red" /><span>{client.phone}</span></div>
          <div className="flex items-center"><TargetIcon className="w-4 h-4 mr-3 text-primary-red" /><span>{client.goal}</span></div>
          <div className="flex items-center"><CalendarIcon className="w-4 h-4 mr-3 text-primary-red" /><span>Start Date: {new Date(client.startDate).toLocaleDateString()}</span></div>
        </div>

        <div className="mt-4 pt-4 border-t border-accent-cream/10">
            <p className="text-sm text-accent-cream/70">Progress</p>
            <p className="text-lg font-semibold text-accent-cream">{client.currentWeight}kg → {client.targetWeight}kg</p>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button onClick={onEdit} className="p-2 text-accent-cream/60 hover:text-accent-cream transition-colors duration-200 rounded-full hover:bg-accent-cream/10">
          <PencilIcon className="w-5 h-5" />
        </button>
        <button onClick={onDelete} className="p-2 text-accent-cream/60 hover:text-red-500 transition-colors duration-200 rounded-full hover:bg-red-500/10">
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
