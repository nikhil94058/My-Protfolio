import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; // Adjust the import path as needed

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/Certificates');
        setCertificates(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Filter certificates based on data-type
  const filteredCertificates = certificates.filter(cert => cert['datatype'] === 'cerr');

  if (filteredCertificates.length === 0) {
    return <div>No certificates found for this type.</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 gap-8">
      {filteredCertificates.map((certificate, index) => (
        <Card
          key={index}
          role={certificate.title}
          des={certificate.description}
          imgUrl={certificate.image}
          borderColor={index % 2 === 0 ? 'blue' : 'green'} // Example of alternating border colors
          index={index}
        />
      ))}
    </div>
  );
};

export default Certificates;
