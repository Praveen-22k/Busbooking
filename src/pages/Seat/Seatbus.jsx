import React, { useEffect, useState } from "react";
import "./Seat.css";
import axios from "axios";

const rows = ["A", "B", "C", "D"];
const seatsPerRow = 9;            // Only 1–9 seats normally
const bookedSeats = ["A3", "A7", "B5", "C1", "D8"];  // Add "10" if needed

const Seatbus = ({ busId }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showError, setShowError] = useState(false);
    const [dataset, setDataset] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const [busSeatData, setBusSeatData] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3105/user/details/?busid=${busId}`);
            setDataset(data);
            axios.get(`http://localhost:3105/user/getseat/?busid=${busId}`).then((value) => {
                setBusSeatData(value.data.data);
            }).catch(setBusSeatData(busSeatData));

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!busId) return;
        fetchData();
    }, [busId]);

    console.log(busSeatData, "bs Seat Layout Data")

    const handleSeatClick = (seatId) => {
        // Prevent clicking booked seats
        if (bookedSeats.includes(seatId)) return;

        // Toggle selection
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const getSeatClass = (seatId) => {
        if (bookedSeats.includes(seatId)) return "seat booked";
        if (selectedSeats.includes(seatId)) return "seat selected";
        return "seat available";
    };

    return (
        <div className="col-md-7 p-3 border-end">
            <h5 className="fw-bold mb-3">
                Click on available seats to reserve your seat
            </h5>

            {/* GROUP SEATS ROW-WISE */}
            {["A", "B", "C", "D"].map((rowLetter) => (
                <div className="d-flex mb-3 align-items-center" key={rowLetter}>

                    {busSeatData
                        .filter((seat) => seat.id.startsWith(rowLetter)) // filter row
                        .map((seat) => (
                            <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                className={`mx-1 p-2 rounded text-center ${getSeatClass(seat.id)}`}
                                style={{
                                    width: "45px",
                                    cursor: "pointer",
                                    border: "1px solid #ccc",
                                }}
                            >
                                {seat.id}
                            </div>
                        ))}

                    {/* SPECIAL SEAT: ONLY ONE EXTRA SEAT IN ROW B */}
                    {rowLetter === "B" && (
                        <div
                            key="10"
                            onClick={() => handleSeatClick("10")}
                            className={`mx-1 p-2 rounded text-center ${getSeatClass("10")}`}
                            style={{
                                width: "45px",
                                cursor: "pointer",
                                border: "1px solid #ccc",
                            }}
                        >
                            10
                        </div>
                    )}
                </div>
            ))}

            {/* Legend */}
            <div className="mt-4 d-flex gap-4">
                <div>
                    <span className="legend available"></span> Available
                </div>
                <div>
                    <span className="legend booked"></span> Booked
                </div>
                <div>
                    <span className="legend selected"></span> Selected
                </div>
            </div>
        </div>

    );
};

export default Seatbus;
