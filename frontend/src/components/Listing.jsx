import ListingCard from './ListingCard';

const Listing = ({ listings = [] }) => {
    const count = listings.length;

    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <p className="mb-6 text-sm text-gray-400" aria-live="polite">
                {count} {count === 1 ? 'room' : 'rooms'} found
            </p>

            {count === 0 ? (
                <div className="rounded-lg border-2 border-dashed border-green-900 p-10 text-center text-gray-400">
                    No rooms match these filters. Try a different area or a higher budget.
                </div>
            ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {listings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Listing;