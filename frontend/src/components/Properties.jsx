import { PRICE_RANGES } from '../data/listings';

const boxClass = 'flex items-center gap-2 rounded-md bg-black px-2 py-1 text-sm text-white';
const selectClass = 'bg-black text-white';

const Properties = ({ filters, onChange }) => {
    return (
        <section className="bg-[#0F4D2E] px-6 py-10">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
                <div className={boxClass}>
                    <label htmlFor="city">Location</label>
                    <select id="city" name="city" value={filters.city} onChange={onChange} className={selectClass}>
                        <option value="">Lagos and Abuja</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                    </select>
                </div>

                <div className={boxClass}>
                    <label htmlFor="range">Price Range</label>
                    <select id="range" name="range" value={filters.range} onChange={onChange} className={selectClass}>
                        <option value="">Any price</option>
                        {PRICE_RANGES.map((r) => (
                            <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                    </select>
                </div>

                <div className={boxClass}>
                    <label htmlFor="roommate">Roommate</label>
                    <select id="roommate" name="roommate" value={filters.roommate} onChange={onChange} className={selectClass}>
                        <option value="">Doesn’t matter</option>
                        <option value="need">Need one</option>
                        <option value="dont">Don’t need one</option>
                    </select>
                </div>

                <div className={boxClass}>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={filters.gender} onChange={onChange} className={selectClass}>
                        <option value="">Doesn’t matter</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Properties;