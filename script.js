document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const paymentForm = document.getElementById('payment-form');
    const flightDetails = document.getElementById('flight-details');
    const seatSelection = document.getElementById('seat-selection');
    const results = document.getElementById('results');
    const flightInfo = document.getElementById('flight-info');
    const seats = document.getElementById('seats');
    const confirmSeatButton = document.getElementById('confirm-seat');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Fetch flight details from server (mocked for this example)
        const flights = [
            { id: 1, airline: 'Airline A', departure: 'NYC', destination: 'LON', time: '10:00 AM', price: 500 },
            { id: 2, airline: 'Airline B', departure: 'NYC', destination: 'LON', time: '02:00 PM', price: 450 }
        ];
        displayResults(flights);
    });

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Process payment (mocked for this example)
        alert('Payment successful!');
        flightDetails.classList.add('hidden');
        seatSelection.classList.remove('hidden');
        displaySeats();
    });

    confirmSeatButton.addEventListener('click', function () {
        // Confirm seat selection (mocked for this example)
        alert('Seat confirmed!');
    });

    function displayResults(flights) {
        results.innerHTML = '';
        flights.forEach(flight => {
            const flightDiv = document.createElement('div');
            flightDiv.className = 'flight-result';
            flightDiv.innerHTML = `
                <p>${flight.airline}</p>
                <p>${flight.departure} to ${flight.destination}</p>
                <p>${flight.time}</p>
                <p>$${flight.price}</p>
                <button class="select-flight" data-flight-id="${flight.id}">Select Flight</button>
            `;
            results.appendChild(flightDiv);
        });

        document.querySelectorAll('.select-flight').forEach(button => {
            button.addEventListener('click', function () {
                const flightId = this.getAttribute('data-flight-id');
                const selectedFlight = flights.find(flight => flight.id == flightId);
                showFlightDetails(selectedFlight);
            });
        });
    }

    function showFlightDetails(flight) {
        flightInfo.innerHTML = `
            <p>Airline: ${flight.airline}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Destination: ${flight.destination}</p>
            <p>Time: ${flight.time}</p>
            <p>Price: $${flight.price}</p>
        `;
        results.innerHTML = '';
        flightDetails.classList.remove('hidden');
    }

    function displaySeats() {
        const seatLayout = [
            '1A', '1B', '1C', '1D',
            '2A', '2B', '2C', '2D',
            '3A', '3B', '3C', '3D'
        ];
        seats.innerHTML = '';
        seatLayout.forEach(seat => {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat';
            seatDiv.innerHTML = `
                <input type="radio" name="seat" value="${seat}" id="${seat}">
                <label for="${seat}">${seat}</label>
            `;
            seats.appendChild(seatDiv);
        });
    }
});