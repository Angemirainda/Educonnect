import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Paiement = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      number: 'INV-001',
      date: '05 Mai 2025',
      amount: 35000,
      status: 'paid',
      pdfUrl: '#'
    },
    {
      id: 2,
      number: 'INV-002',
      date: '12 Mai 2025',
      amount: 45000,
      status: 'pending',
      pdfUrl: '#'
    },
    {
      id: 3,
      number: 'INV-003',
      date: '20 Mai 2025',
      amount: 4000,
      status: 'pending',
      pdfUrl: '#'
    }
  ]);

  // État pour la modale
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    invoice: null,
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    isLoading: false,
    success: false
  });

  // Ouvrir la modale de paiement
  const openPaymentModal = (invoice) => {
    setPaymentModal({
      ...paymentModal,
      isOpen: true,
      invoice,
      success: false
    });
  };

  // Fermer la modale
  const closePaymentModal = () => {
    setPaymentModal({
      ...paymentModal,
      isOpen: false,
      isLoading: false
    });
  };

  // Gérer le changement de méthode de paiement
  const handlePaymentMethodChange = (method) => {
    setPaymentModal({
      ...paymentModal,
      paymentMethod: method
    });
  };

  // Simuler le traitement du paiement
  const processPayment = () => {
    setPaymentModal({ ...paymentModal, isLoading: true });
    
    // Simulation de délai de traitement
    setTimeout(() => {
      // Mettre à jour le statut de la facture
      setInvoices(invoices.map(invoice => 
        invoice.id === paymentModal.invoice.id 
          ? { ...invoice, status: 'paid' } 
          : invoice
      ));
      
      setPaymentModal({
        ...paymentModal,
        isLoading: false,
        success: true
      });
      
      // Fermer automatiquement après 3 secondes
      setTimeout(() => {
        closePaymentModal();
      }, 3000);
    }, 2000);
  };

  // Télécharger une facture
  const downloadInvoice = (invoiceId) => {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    alert(`Téléchargement de la facture ${invoice.number}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 relative">
      {/* Modale de paiement */}
      {paymentModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            {!paymentModal.success ? (
              <>
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">
                      Paiement de la facture {paymentModal.invoice?.number}
                    </h3>
                    <button 
                      onClick={closePaymentModal}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                  <p className="text-gray-600 mt-1">
                    Montant: <span className="font-bold">{paymentModal.invoice?.amount.toFixed(2)}FCFA</span>
                  </p>
                </div>
                
                <div className="p-6">
                  {/* Méthodes de paiement */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Méthode de paiement 
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => handlePaymentMethodChange('card')}
                        className={`py-3 px-2 rounded-lg border flex flex-col items-center ${
                          paymentModal.paymentMethod === 'card'
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-2xl mb-1">💳</span>
                        <span className="text-xs">carte</span>
                      </button>
                      <button
                        onClick={() => handlePaymentMethodChange('paypal')}
                        className={`py-3 px-2 rounded-lg border flex flex-col items-center ${
                          paymentModal.paymentMethod === 'paypal'
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-2xl mb-1">🔵</span>
                        <span className="text-xs">Orange Money</span>
                      </button>
                      <button
                        onClick={() => handlePaymentMethodChange('transfer')}
                        className={`py-3 px-2 rounded-lg border flex flex-col items-center ${
                          paymentModal.paymentMethod === 'transfer'
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-2xl mb-1">🏦</span>
                        <span className="text-xs">Mobile Money</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Formulaire de carte (visible seulement si carte sélectionnée) */}
                  {paymentModal.paymentMethod === 'card' && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Numéro de carte
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                          <div className="absolute right-3 top-2 text-gray-400">
                            <i className="fa fa-credit-card"></i>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid  gap-4">
                        <div className='w-full'>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date d'expiration
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        
                      </div>
                    </div>
                  )}
                  
                  {/* Bouton de paiement */}
                  <button
                    onClick={processPayment}
                    disabled={paymentModal.isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 flex items-center justify-center"
                  >
                    {paymentModal.isLoading ? (
                      <>
                        <i className="fa fa-spinner fa-spin mr-2"></i>
                        Traitement...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-credit-card"></i> 
                        Payer {paymentModal.invoice?.amount.toFixed(2)}FCFA
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="p-6 text-center">
                <div className="text-6xl mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Paiement réussi !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre paiement de FCFA{paymentModal.invoice?.amount.toFixed(2)} a été traité avec succès.
                </p>
                <div className="bg-green-50 text-green-800 p-3 rounded-lg mb-6">
                  <i className="fa fa-check-circle mr-2"></i>
                  Facture #{paymentModal.invoice?.number} marquée comme payée
                </div>
                <button
                  onClick={closePaymentModal}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200"
                >
                  Retour aux factures
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Paiements et Factures</h1>
      </header>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total des paiements */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total payé</p>
              <h2 className="text-3xl font-bold text-green-600 mt-1">
                {invoices
                  .filter(inv => inv.status === 'paid')
                  .reduce((sum, inv) => sum + inv.amount, 0)
                  .toFixed(2)}FCFA
              </h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
            <i className="fas fa-file-invoice-dollar text-green-600"></i>

            </div>
          </div>
        </div>

        {/* Factures en attente */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">À payer</p>
              <h2 className="text-3xl font-bold text-orange-600 mt-1">
                {invoices
                  .filter(inv => inv.status === 'pending')
                  .reduce((sum, inv) => sum + inv.amount, 0)
                  .toFixed(2)}FCFA
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {invoices.filter(inv => inv.status === 'pending').length} facture(s) en attente
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
            <i className="fas fa-file-invoice-dollar text-red-500"></i>

            </div>
          </div>
        </div>

        {/* Dernière facture */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Dernière facture</p>
              <h2 className="text-xl font-bold text-blue-600 mt-1">
                {invoices[0]?.number || 'Aucune'}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {invoices[0]?.date || ''}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
            <i className="fas fa-file-invoice-dollar text-blue-600"></i>

            </div>
          </div>
        </div>
      </div>

      {/* Tableau des factures */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Factures récentes</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{invoice.number}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{invoice.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{invoice.amount.toFixed(2)}FCFA</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      invoice.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {invoice.status === 'paid' ? 'Payé' : 'En attente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {invoice.status === 'paid' ? (
                      <button
                        onClick={() => downloadInvoice(invoice.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        <i className="fa fa-file-pdf-o mr-1"></i> Facture
                      </button>
                    ) : (
                      <button
                      
                        onClick={() => openPaymentModal(invoice)}
                        className=" hover:bg-blue-200 text-white px-3 py-1 rounded-md text-sm flex items-center"
                      >
                        <span className="mr-1 text-blue-500"><i className="fas fa-credit-card"></i> </span> Payer
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Paiement;