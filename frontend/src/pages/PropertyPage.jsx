import { useState } from 'react';
import Properties from '../components/Properties';
import Listing from '../components/Listing';
import { LISTINGS, PRICE_RANGES } from '../data/listings';

const PropertyPage = () => {
    const [filters, setFilters] = useState({
        city: '',
        range: '',
        roommate: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const selectedRange = PRICE_RANGES.find((r) => r.value === filters.range);

    const filtered = LISTINGS.filter((l) => {
        if (filters.city && l.city !== filters.city) return false;
        if (selectedRange && (l.price < selectedRange.min || l.price >= selectedRange.max)) return false;
        if (filters.roommate && l.roommate !== filters.roommate) return false;
        if (filters.gender && l.gender !== 'Any' && l.gender !== filters.gender) return false;
        return true;
    });

    return (
        <div className="min-h-screen bg-[#0A0D0B]">
            <Properties filters={filters} onChange={handleChange} />
            <Listing listings={filtered} />
        </div>
    );
};

export default PropertyPage;