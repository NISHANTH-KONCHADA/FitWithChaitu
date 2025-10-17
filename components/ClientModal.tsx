import React, { useState, useEffect } from 'react';
import { Client, ClientStatus } from '../types';
import Button from './Button';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (clientData: Omit<Client, 'id'> & { id?: string }) => void;
  clientToEdit: Client | null;
}

const initialFormState = {
    name: '',
    email: '',
    phone: '',
    goal: '',
    startDate: new Date().toISOString().split('T')[0],
    currentWeight: 0,
    targetWeight: 0,
    status: ClientStatus.Active,
    notes: ''
};


const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onClose, onSave, clientToEdit }) => {
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (clientToEdit) {
            // FIX: Ensure 'notes' property is always a string to match the form state's type.
            // The 'clientToEdit' object has an optional 'notes' property, which can be undefined.
            // Default to an empty string if 'notes' is null or undefined.
            setFormData({
                ...clientToEdit,
                startDate: new Date(clientToEdit.startDate).toISOString().split('T')[0],
                notes: clientToEdit.notes ?? '',
            });
        } else {
            setFormData(initialFormState);
        }
    }, [clientToEdit, isOpen]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name.includes('Weight') ? parseFloat(value) || 0 : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-dark-bg border border-accent-cream/20 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center p-6 border-b border-accent-cream/10">
                        <h2 className="text-2xl font-heading text-accent-cream">{clientToEdit ? 'Edit Client' : 'Add New Client'}</h2>
                        <button type="button" onClick={onClose} className="text-accent-cream/50 hover:text-accent-cream">&times;</button>
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries({ name: 'Name', email: 'Email', phone: 'Phone', goal: 'Fitness Goal' }).map(([key, label]) => (
                            <div key={key}>
                                <label className="block text-sm font-medium text-accent-cream/70 mb-1">{label}</label>
                                <input type={key === 'email' ? 'email' : 'text'} name={key} value={(formData as any)[key]} onChange={handleChange} required className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red" />
                            </div>
                        ))}
                         <div>
                            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Start Date</label>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red">
                                {Object.values(ClientStatus).map(status => <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>)}
                            </select>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Current Weight (kg)</label>
                            <input type="number" name="currentWeight" value={formData.currentWeight} onChange={handleChange} required className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-accent-cream/70 mb-1">Target Weight (kg)</label>
                            <input type="number" name="targetWeight" value={formData.targetWeight} onChange={handleChange} required className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red" />
                        </div>
                        <div className="md:col-span-2">
                             <label className="block text-sm font-medium text-accent-cream/70 mb-1">Notes</label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} placeholder="Any relevant notes about the client..." className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-2.5 text-accent-cream focus:outline-none focus:ring-2 focus:ring-primary-red"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end items-center p-6 border-t border-accent-cream/10 space-x-4">
                         <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                         <Button type="submit" variant="primary">{clientToEdit ? 'Update Client' : 'Create Client'}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientModal;