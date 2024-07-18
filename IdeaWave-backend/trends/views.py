from django.http import JsonResponse
from pytrends.request import TrendReq
import datetime
import time

# Rate limit control
LAST_REQUEST_TIME = None
REQUEST_INTERVAL = 1  # in seconds

def get_google_trends(request):
    global LAST_REQUEST_TIME

    # Check rate limit
    current_time = time.time()
    if LAST_REQUEST_TIME and (current_time - LAST_REQUEST_TIME) < REQUEST_INTERVAL:
        return JsonResponse({'error': 'Rate limit exceeded. Please try again later.'}, status=429)

    pytrends = TrendReq()
    pytrends.build_payload(kw_list=['trending'])

    trending_searches_df = pytrends.trending_searches(pn='united_states')
    trending_searches = trending_searches_df[0].tolist()

    #limit to 10 items

    top_ten_searches = trending_searches[:10]

    # Update last request time
    LAST_REQUEST_TIME = current_time

    return JsonResponse({'trends': top_ten_searches})

