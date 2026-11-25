import { formatPrice } from '../data/listings';

const PLACEHOLDER = '/images/listings/placeholder.jpg';


const ListingCard = ({ listing }) => {
    const { title, area, city, price, verified, who, tags = [], images } = listing;

    const cover = images?.[0] || PLACEHOLDER;

    const handleImageError = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = PLACEHOLDER;
    };

    return (
        <article className="flex flex-col overflow-hidden rounded-lg border border-green-900 bg-[#0F1511] text-white">
            <img
                src={cover}
                alt={`${title} in ${area}`}
                loading="lazy"
                onError={handleImageError}
                className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug">{title}</h3>
                    <p className="whitespace-nowrap font-bold">
                        {formatPrice(price)}
                        <span className="text-sm font-normal text-gray-400"> /yr</span>
                    </p>
                </div>

                <p className="text-sm text-gray-400">{area}, {city}</p>

                {verified && (
                    <span className="w-fit rounded-full bg-green-700 px-3 py-1 text-xs font-semibold">
                        Verified lister
                    </span>
                )}

                <p className="text-sm text-gray-300">{who}</p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-green-900 px-2 py-0.5 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>

                <button type="button" className="mt-auto rounded-lg bg-green-700 px-4 py-2 font-semibold">
                    Ask about this room
                </button>
            </div>
        </article>
    );
};

export default ListingCard;