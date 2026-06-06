import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { serviceCatalog } from '../data/services';

type Service = {
  id: string;
  title: string;
  description: string;
  imageLabel?: string;
  imageUrl?: string;
};

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const catalogItem = serviceCatalog.find((s) => s.id === service.id);
  const price = catalogItem?.price ?? 500;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.32, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-4 w-full rounded-2xl bg-white p-4 sm:p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            {service.imageUrl ? (
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 mx-auto sm:mx-0">
                <img src={service.imageUrl} alt={service.imageLabel ?? service.title} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-28 h-28 rounded-xl flex-shrink-0 bg-gradient-to-br from-cyan-50 to-sky-50 flex items-center justify-center text-slate-700 mx-auto sm:mx-0">
                {service.imageLabel ?? 'Image'}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 items-start">
          <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 p-6 flex flex-col items-start gap-4">
            <div className="text-sm text-slate-500">Starting from</div>
            <div className="text-3xl font-bold text-slate-900">₹{price}</div>
            <p className="text-sm text-slate-600">Typical starting cost — final quote depends on site inspection.</p>
            <a href="tel:+919959910140" className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Book Now
            </a>
          </div>

          <div className="rounded-xl bg-slate-100 p-6">
            <div className="text-sm text-slate-500">What we do</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>- Full inspection and diagnostics</li>
              <li>- Skilled technician dispatched</li>
              <li>- Quality parts and clean finish</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
