# Geo-Sustain

<div align="center">

![Geo-Sustain Banner](assets/media/banner.png)

**A real-time, scalable geo-intelligence platform for sustainable urban mobility**

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Features](#features) • [Demo](#demo) • [Getting Started](#getting-started) • [Documentation](#documentation) • [Team](#team)

</div>

---

## Overview

Geo-Sustain is a multi-agent reinforcement learning environment designed for large-scale city traffic scenarios. It combines real-time traffic data, air quality monitoring, and machine learning to provide actionable intelligence for reducing pollution exposure in urban environments.

The platform integrates multiple data sources—traffic flow, AQI measurements, weather conditions—to enable:
- **Smart eco-routing** that minimizes pollution exposure
- **Predictive analytics** for future pollution hotspots
- **Real-time monitoring** with interactive visualization
- **Data-driven insights** for urban planning and policy

## Features

### 🗺️ Live Interactive Map
- Real-time traffic visualization with TomTom integration
- Air Quality Index (AQI) heatmap overlay
- Predicted pollution hotspots
- Area-specific insights (AQI, average speed, incidents)

### 🌱 Eco-Routing Engine
- Compare fastest vs. greenest routes
- Estimate pollution exposure reduction (PM2.5, NOx)
- Balance time efficiency with environmental impact
- Route optimization based on real-time conditions

### 🔮 ML-Powered Predictions
- Forecast pollution levels (1/3/6 hour horizons)
- Multi-factor analysis: traffic patterns, weather, historical AQI
- Identify future hotspots before they form
- Support proactive traffic management

### 📊 Analytics Dashboard
- AQI trend analysis
- Traffic pattern visualization
- Noise level monitoring
- Emission reduction metrics and KPIs

## Architecture

```
┌─────────────────┐
│  Data Sources   │
│  • TomTom API   │
│  • CPCB API     │
│  • Weather API  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Data Ingestion  │
│ & Fusion Layer  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  ML Prediction  │
│     Engine      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Routing API    │
│ & Visualization │
└─────────────────┘
```

**Technical Stack:**
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Mapping:** TomTom Maps SDK / Mapbox (configurable)
- **Data APIs:** TomTom Traffic API, CPCB Air Quality API
- **ML Models:** Traffic prediction, pollution forecasting
- **Hosting:** Static site (GitHub Pages compatible)

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- TomTom API key ([get one here](https://developer.tomtom.com/))
- CPCB API access (for India-specific AQI data)

### Installation

#### Option 1: Docker (Recommended)
```bash
# Pull the container
docker pull geosustain/platform:latest

# Run the container
docker run -p 8080:80 geosustain/platform:latest
```

#### Option 2: From Source
```bash
# Clone the repository
git clone https://github.com/yourusername/geo-sustain.git
cd geo-sustain

# Configure API keys
cp config.example.js config.js
# Edit config.js with your API keys

# Serve locally
python -m http.server 8000
# or
npx serve .
```

Visit `http://localhost:8000` in your browser.

### Configuration

Edit `assets/js/map.js` to add your API credentials:

```javascript
const TOMTOM_KEY = 'YOUR_TOMTOM_API_KEY';
const CPCB_API = 'YOUR_CPCB_ENDPOINT';
```

## Demo

🚀 **[Live Demo](https://your-demo-url.github.io)** | 📹 **[Video Walkthrough](#)**

### Quick Tour

1. **Explore the Live Map:** View real-time traffic and AQI data
2. **Try Eco-Routing:** Compare routes and see pollution exposure estimates
3. **Check Predictions:** Forecast pollution hotspots for the next few hours
4. **Analyze Trends:** Review historical data and emission reduction metrics

## Use Cases

- **Urban Commuters:** Find healthier routes with lower pollution exposure
- **City Planners:** Identify chronic pollution zones for infrastructure planning
- **Policy Makers:** Evidence-based decisions for traffic and environmental policy
- **Researchers:** Large-scale traffic simulation and RL experimentation
- **Fleet Operators:** Optimize delivery routes for environmental impact

## Mission

Reduce pollution exposure in urban environments and provide actionable intelligence for sustainable city planning through real-time data fusion and machine learning.

## Documentation

- [API Documentation](docs/API.md)
- [ML Models](docs/MODELS.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing Guidelines](CONTRIBUTING.md)

## Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Integration with more cities beyond India
- [ ] Real-time alerts for pollution spikes
- [ ] Public transit integration
- [ ] Carbon footprint tracking
- [ ] Community-contributed sensor data

## Team

**Fireflies 🧚🏻‍♀️**

- **Divya Verma** - Team Lead
- **Divyanshi Sahu** - Developer
- **Khushboo Yadav** - Developer

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with inspiration from CityFlow traffic simulation
- Traffic data powered by TomTom
- Air quality data from Central Pollution Control Board (CPCB), India
- Special thanks to the open-source community
  
---

<div align="center">
Made with 💚 by Fireflies for a sustainable future
</div>
