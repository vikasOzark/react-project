from django.test import TestCase

# Create your tests here.
{'status': 'CANCELED', 'order__name': 'test5', 'count': 1}, 
{'status': 'OFD', 'order__name': 'test5', 'count': 1}

{'status': 'DELIVERED', 'order__name': 'test2', 'count': 1}, 
{'status': 'OFD', 'order__name': 'test2', 'count': 1}, 

{'status': 'OFD', 'order__name': 'test3', 'count': 1}, 
{'status': 'DELIVERED', 'order__name': 'test3', 'count': 1}, 

{'status': 'DELIVERED', 'order__name': 'test1', 'count': 2}, 
{'status': 'OFD', 'order__name': 'test1', 'count': 1}, 

{'status': 'CANCELED', 'order__name': 'test4', 'count': 1}, 