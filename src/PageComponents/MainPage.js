import { fetchCoins } from "../ReduxComponents/CoinAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../assests/Logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function MainPage() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.Coins);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCoins()).then(() => setLoading(false));

    setInterval(() => {
      dispatch(fetchCoins());
    }, 1000);
  }, [dispatch]);

  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "b";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "k";
    } else {
      return num.toFixed(2);
    }
  }

  return (
    <div>
      <div className="h-28 bg-dark-blue-violet flex items-center justify-center">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="bg-dark-blue-violet-lighter text-white pb-10">
        <div className=" text-white text-center py-4">
          <h1 className="text-2xl font-bold px-3">
            Welcome to my Crypto Tracker
          </h1>
          <p className="mt-2 px-3">
            Stay up-to-date with the latest cryptocurrency prices and market
            data.
          </p>
        </div>
        <div className="pt-10">
          {loading ? (
            <p className="text-center font-bold">Loading...</p>
          ) : (
            <table className=" table-auto border-collapse border mx-auto border-gray-300 rounded">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-center hidden md:table-cell">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">
                    Market Cap
                  </th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">
                    VWAP (24Hr)
                  </th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">
                    Supply
                  </th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">
                    Volume (24Hr)
                  </th>
                  <th className="px-4 py-3 text-center">Change (24Hr)</th>
                </tr>
              </thead>
              <tbody>
                {coins &&
                  Object.values(coins)[0].map((coin) => (
                    <tr
                      key={coin.id}
                      className="border border-black bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        {coin.rank}
                      </td>
                      <td className="px-4 py-3 text-left">
                        <div className="flex items-center">
                          <img
                            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                            alt="coin logo"
                            className="w-6 h-6 mr-2"
                          />
                          <div>
                            <span>{coin.name}</span>
                            <span class="text-gray-500 text-sm block">
                              {coin.symbol}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        ${formatNumber(parseFloat(coin.priceUsd))}
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        ${formatNumber(parseFloat(coin.marketCapUsd))}
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        ${formatNumber(parseFloat(coin.vwap24Hr))}
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        {formatNumber(coin.supply)}
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        ${formatNumber(parseFloat(coin.volumeUsd24Hr))}
                      </td>
                      <td
                        className={`px-4 py-3 text-center ${
                          parseFloat(coin.changePercent24Hr) < 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {parseFloat(coin.changePercent24Hr).toFixed(2)}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <footer className="bg-dark-blue-violet-lighter py-12 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <a href="/" className="inline-block mr-4">
                  <img src={logo} alt="CoinSight" />
                </a>
              </div>
              <p className="text-lg mb-6">
                CoinSight is your go-to source for the latest cryptocurrency
                prices, and market trends. Stay up-to-date on Bitcoin, Ethereum,
                and other top coins with our expert analysis and insights.
              </p>
              <div className="flex items-center">
                <a
                  href="https://twitter.com/AhamedMeyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-gray-200"
                >
                  <TwitterIcon className="w-8 h-8" />
                </a>
                <a
                  href="https://github.com/Ahamed1846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-gray-200"
                >
                  <GitHubIcon className="w-8 h-8" />
                </a>
                <a
                  href="https://github.com/Ahamed1846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-gray-200"
                >
                  <LinkedInIcon className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/ahxmed_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-4 hover:text-gray-200"
                >
                  <InstagramIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div>
              <p className="text-sm">
                Crypto data provided by{" "}
                <a
                  href="https://docs.coincap.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  CoinCap.io
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
