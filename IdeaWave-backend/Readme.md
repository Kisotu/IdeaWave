# IdeaWave: A Django Application

IdeaWave is a Django-based application designed to help entrepreneurs discover trending topics on Google and generate innovative business ideas using the power of OpenAI's GPT-3 API.

## Features

- **Google Trends Integration**: Fetch real-time trending topics directly from Google Trends.
- **OpenAI API Integration**: Utilize OpenAI's GPT-3 API to generate creative business ideas based on the fetched trends.
- **User Authentication**: Secure user accounts for personalized experience.
- **Dashboard**: View and manage your generated business ideas.

## Getting Started

These instructions will guide you through setting up the TrendyBusiness application on your local machine for development purposes.

### Prerequisites

- Python 3.8+
- Django 3.2+
- OpenAI API Key (sign up at [OpenAI](https://openai.com/) to obtain one)

### Installation

1. Clone this repository:
- git clone https://github.com/IdeaWave/IdeaWave.git 

2. Create a virtual environment and activate it:
python3 -m venv venv source venv/bin/activate # On Windows use venv\Scripts\activate

3. Install the required packages:
pip install -r requirements.txt


4. Configure the `.env` file with your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here


5. Apply migrations and run the server:
python manage.py migrate python manage.py runserver


6. Visit `http://127.0.0.1:8000/` in your browser to view the application.

## Usage

After starting the server, you can explore the application features such as fetching trending topics, generating business ideas, and managing them through the dashboard.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

Distributed under the MIT License. See `LICENSE` for more information.