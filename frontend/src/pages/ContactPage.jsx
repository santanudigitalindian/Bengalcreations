import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { PageHero } from '../components/ui/index.jsx'
import EnquiryForm from '../components/forms/EnquiryForm'
import ContactImg from '../assates/contact.png'

export default function ContactPage() {
  const locations = [
    {
      city: 'Kolkata',
      address: 'Digital Indian EN-9, Sector V, Salt Lake\nKolkata – 700091, West Bengal',
    },
    {
      city: 'Bengaluru',
      address: 'Survey No. 22/1, Belathur Main Road, Kadugodi\nBengaluru – 560067, Karnataka',
    },
    {
      city: 'Bhubaneswar',
      address: 'Duplex No.-9 Benupur, Balianta\nBhubaneswar – 752101, Odisha, India',
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      val: 'info@digitalindian.co.in',
      href: 'mailto:info@digitalindian.co.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      val: '+91 9830640814 | +91 7908735132',
      href: 'tel:+919830640814',
    },
    {
      icon: Clock,
      label: 'Hours',
      val: 'Mon–Sun: 9:30 AM – 6:30 PM IST',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contact — Digital Indian</title>
      </Helmet>

      <PageHero
        label="Contact"
        title="Let's work together"
        subtitle="Tell us about your geospatial challenge and we'll respond within 1–2 business days."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        img={ContactImg}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-bold text-slate-900 text-2xl mb-6">
                Send an Enquiry
              </h2>
              <EnquiryForm />
            </div>

            <div>
              <h2 className="font-display font-bold text-slate-900 text-2xl mb-6">
                Contact Details
              </h2>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 mb-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-500" />
                  </div>

                  <div className="w-full">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      Our Locations
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {locations.map((item) => (
                        <div key={item.city}>
                          <h3 className="text-sm font-bold text-slate-900 mb-1">
                            {item.city}
                          </h3>
                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                            {item.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {contactInfo.map(({ icon: Icon, label, val, href }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-brand-500" />
                    </div>

                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {label}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        className="text-slate-700 hover:text-brand-600 text-sm font-medium leading-snug transition-colors break-words"
                      >
                        {val}
                      </a>
                    ) : (
                      <p className="text-slate-700 text-sm font-medium leading-snug">
                        {val}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 h-64">
                <iframe
                  title="Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.4274!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSalt+Lake+Sector+V%2C+Kolkata!5e0!3m2!1sen!2sin!4v1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}