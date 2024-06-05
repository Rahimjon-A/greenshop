
const OrderForm = ({formData, handleInputChange, errors, info }) => {
  return (
    <form>
      <div>
        <p className="text-[22px] font-bold ">
          Billing Address
        </p>
        <p className="text-[--text]"> {info} </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[21px] md:gap-[22px]">
          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="firstname"
              className="text-[18px] mb-[10px]"
            >
              First Name{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="text"
              id="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="border px-2 h-[40px] outline-[--primary]"
            />
            {errors.firstname && <p className="text-red-700">{errors.firstname}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="lastname"
              className="text-[18px] mb-[10px]"
            >
              Last Name{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="text"
              id="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="border px-2 h-10 outline-[--primary]"
            />
            {errors.lastname && <p className="text-red-700">{errors.lastname}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="country"
              className="text-[18px] mb-[10px]"
            >
              Country / Region{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="px-2 border h-10 outline-[--primary] text-[--text]"
            >
              <option
                value="default"
                hidden
                className="text-[--text]"
              >
                Select Country / Region
              </option>
              <option value="toshkent">Toshkent</option>
              <option value="fergana">Farg'ona</option>
              <option value="andijon">Andijon</option>
              <option value="namangan">Namangan</option>
              <option value="samarqand">Samarqand</option>
            </select>
            {errors.country && <p className="text-red-700">{errors.country}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="city"
              className="text-[18px] mb-[10px]"
            >
              Town / City{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border px-2 h-10 outline-[--primary]"
            />
            {errors.city && <p className="text-red-700">{errors.city}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="street"
              className="text-[18px] mb-[10px]"
            >
              Street Address{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="text"
              id="street"
              value={formData.street}
              onChange={handleInputChange}
              className="border px-2 h-10 outline-[--primary]"
              placeholder="House number and street name"
            />
            {errors.street && <p className="text-red-700">{errors.street}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label className="text-[18px] mb-[10px] text-white">
              ...
            </label>
            <input
              type="text"
              className="border px-2 h-10 outline-[--primary]"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="state"
              className="text-[18px] mb-[10px]"
            >
              State{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <select
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border text-[--text] px-2 h-10 outline-[--primary]"
            >
              <option value="default">
                Select a State
              </option>
              <option value="chilonzor">Chilonzor</option>
              <option value="yakka">Yakkasaroy</option>
              <option value="yunus">Yunisobod</option>
              <option value="mirzo">
                Mirzo Ulug'bek
              </option>
              <option value="sergili">Sergili</option>
            </select>
            {errors.state && <p className="text-red-700">{errors.state}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="zip"
              className="text-[18px] mb-[10px]"
            >
              Zip{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="number"
              id="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="border px-2 h-10 outline-[--primary]"
            />
            {errors.zip && <p className="text-red-700">{errors.zip}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="email"
              className="text-[18px] mb-[10px]"
            >
              Email address{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border px-2 h-10 outline-[--primary]"
            />
            {errors.email && <p className="text-red-700">{errors.email}</p>}
          </div>

          <div className="flex flex-col mb-[15px] md:mb-[30px]">
            <label
              htmlFor="phone"
              className="text-[18px] mb-[10px]"
            >
              Phone Number{" "}
              <span className="text-red-700 font-bold text-xl">
                *
              </span>
            </label>
            <div className="flex items-center gap-2">
              <select
               className="border px-3 h-10 outline-[--primary]" id="phone">
                <option value="+966">+966</option>
                <option value="+998">+998</option>
                <option value="+900">+900</option>
              </select>
              <input
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border outline-[--primary] h-full grow " type="number" />
            </div>
            {errors.phone && <p className="text-red-700">{errors.phone}</p>}
          </div>


        </div>
      </div>
    </form>
  );
};

export default OrderForm;
