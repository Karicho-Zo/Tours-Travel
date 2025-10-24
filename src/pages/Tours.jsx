import React, { useState, useEffect } from 'react';
import TourCard from '../components/TourCard';
import TourModal from '../components/TourModal';
import './Tours.css';
const Tours = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample tours data
  const toursData = [
    {
      id: 1,
      title: "Safari Adventure Kenya",
      destination: "Kenya",
      duration: "5 Days",
      price: "$1,299",
      image: '/assets/Mara.jpg',
      description: "Experience the Great Migration and witness Africa's wildlife up close in the famous Masai Mara.",
      rating: 4.8
    },
    {
      id: 2,
      title: "Cape Town Explorer",
      destination: "South Africa",
      duration: "7 Days",
      price: "$1,899",
      image: '/assets/Cape.jpg',
     description: "Discover the beauty of Cape Town with Table Mountain, wine tours, and coastal adventures.",
      rating: 4.9
    },
    {
      id: 3,
      title: "Pyramids & Nile Cruise",
      destination: "Egypt",
      duration: "8 Days",
      price: "$2,199",
      image: '/assets/Nile.jpg',
      description: "Journey through ancient Egypt visiting pyramids, temples, and cruising the historic Nile River.",
      rating: 4.7
    },
    {
      id: 4,
      title: "Victoria Falls Safari",
      destination: "Zimbabwe",
      duration: "6 Days",
      price: "$1,699",
      image: '/assets/victoria.jpg',
      description: "Witness the power and beauty of Victoria Falls combined with wildlife safaris in Zimbabwe.",
      rating: 4.6
    },
    {
      id: 5,
      title: "Morocco Desert Adventure",
      destination: "Morocco",
      duration: "10 Days",
      price: "$1,499",
      image: '/assets/Desert.jpg',
      description: "Experience the Sahara Desert, ancient medinas, and the culture of Morocco on this comprehensive tour.",
      rating: 4.5
    },
    {
      id: 6,
      title: "Serengeti Migration Safari",
      destination: "Tanzania",
      duration: "7 Days",
      price: "$2,399",
      image: '/assets/Serengeti.jpg',
      description: "Follow the Great Migration in Tanzania's Serengeti National Park with luxury camping experiences.",
      rating: 4.9
    }
  ];

  useEffect(() => {
    setTours(toursData);
    setFilteredTours(toursData);
  }, []);

  useEffect(() => {
    let filtered = tours;

    // Filter by destination
    if (selectedDestination !== 'all') {
      filtered = filtered.filter(tour => tour.destination === selectedDestination);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(tour => {
        const price = parseInt(tour.price.replace('$', '').replace(',', ''));
        switch (selectedPriceRange) {
          case 'budget':
            return price < 1500;
          case 'mid':
            return price >= 1500 && price < 2000;
          case 'luxury':
            return price >= 2000;
          default:
            return true;
        }
      });
    }

    // Sort tours
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredTours(sorted);
  }, [tours, selectedDestination, selectedPriceRange, sortBy]);

  const destinations = ['all', ...new Set(tours.map(tour => tour.destination))];

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="tours-page">
      <div className="tours-hero">
        <div className="container">
          <h1>Explore Our Tour Packages</h1>
          <p>Discover amazing destinations across Africa with our carefully curated tour packages</p>
        </div>
      </div>

      <div className="tours-filters">
        <div className="container">
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="destination">Destination:</label>
              <select
                id="destination"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              >
                <option value="all">All Destinations</option>
                {destinations.filter(dest => dest !== 'all').map(dest => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="price-range">Price Range:</label>
              <select
                id="price-range"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (Under $1,500)</option>
                <option value="mid">Mid-Range ($1,500 - $2,000)</option>
                <option value="luxury">Luxury (Over $2,000)</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-by">Sort By:</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="tours-list">
        <div className="container">
          <div className="tours-results">
            <p className="results-count">
              Showing {filteredTours.length} of {tours.length} tours
            </p>
          </div>

          <div className="tours-grid">
            {filteredTours.map(tour => (
              <TourCard
                key={tour.id}
                tour={tour}
                onViewDetails={() => openModal(tour)}
              />
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="no-results">
              <h3>No tours found</h3>
              <p>Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tour Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Tours;