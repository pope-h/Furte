/**
 * Renders the Services section.
 *
 * @returns {JSX.Element} The rendered Services section.
 */
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9" id="services">
      {services.map((service) => (
        <ServiceCard 
          key={service.label}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services