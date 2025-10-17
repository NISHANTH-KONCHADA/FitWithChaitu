
import React, { useState, useMemo } from 'react';
import { Client, ClientStatus } from '../types';
import ClientCard from '../components/ClientCard';
import ClientModal from '../components/ClientModal';
import Button from '../components/Button';
import { PlusIcon, SearchIcon } from '../components/Icons';

const initialClients: Client[] = [
    {
        id: '1',
        name: 'John Anderson',
        email: 'john.a@example.com',
        phone: '123-456-7890',
        goal: 'Lose 10kg',
        startDate: '2023-01-15',
        currentWeight: 85,
        targetWeight: 75,
        status: ClientStatus.Active,
        notes: 'Focus on cardio and diet.'
    },
    {
        id: '2',
        name: 'Sarah Mitchell',
        email: 'sarah.m@example.com',
        phone: '234-567-8901',
        goal: 'Build Muscle',
        startDate: '2023-03-01',
        currentWeight: 60,
        targetWeight: 65,
        status: ClientStatus.Active,
        notes: 'Strength training 3x a week.'
    },
    {
        id: '3',
        name: 'Mike Thompson',
        email: 'mike.t@example.com',
        phone: '345-678-9012',
        goal: 'Improve Endurance',
        startDate: '2023-02-10',
        currentWeight: 78,
        targetWeight: 75,
        status: ClientStatus.Paused,
        notes: 'Paused due to travel.'
    },
];

const DashboardPage: React.FC = () => {
    const [clients, setClients] = useState<Client[]>(initialClients);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingClient, setEditingClient] = useState<Client | null>(null);

    const openAddModal = () => {
        setEditingClient(null);
        setIsModalOpen(true);
    };

    const openEditModal = (client: Client) => {
        setEditingClient(client);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingClient(null);
    };

    const handleSaveClient = (clientData: Omit<Client, 'id'> & { id?: string }) => {
        if (editingClient) {
            // Update
            setClients(clients.map(c => c.id === editingClient.id ? { ...c, ...clientData } as Client : c));
        } else {
            // Add
            const newClient: Client = { ...clientData, id: crypto.randomUUID() };
            setClients([newClient, ...clients]);
        }
        closeModal();
    };

    const handleDeleteClient = (clientId: string) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            setClients(clients.filter(c => c.id !== clientId));
        }
    };
    
    const filteredClients = useMemo(() => 
        clients.filter(client => 
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.goal.toLowerCase().includes(searchTerm.toLowerCase())
        ), [clients, searchTerm]);


    return (
        <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-heading text-accent-cream">Client Management</h1>
                    <p className="text-accent-cream/70 mt-2">Track and manage your fitness clients.</p>
                </div>
                <Button variant="primary" onClick={openAddModal} className="mt-4 md:mt-0 flex items-center space-x-2">
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Client</span>
                </Button>
            </div>

            <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-accent-cream/50" />
                </div>
                <input
                    type="text"
                    placeholder="Search clients by name, email, or goal..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md py-3 pl-12 pr-4 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClients.map(client => (
                    <ClientCard 
                        key={client.id} 
                        client={client} 
                        onEdit={() => openEditModal(client)}
                        onDelete={() => handleDeleteClient(client.id)}
                    />
                ))}
            </div>
            {filteredClients.length === 0 && (
                <div className="text-center py-16 text-accent-cream/60">
                    <p>No clients found.</p>
                </div>
            )}

            <ClientModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSaveClient}
                clientToEdit={editingClient}
            />
        </div>
    );
};

export default DashboardPage;
