from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('landlord.html', views.landlord, name='landlord'),
	path('applicant.html', views.applicant, name='applicant'),
	path('globalview.html', views.globalview, name='globalview'),
	path('myproperties.html', views.myproperties, name='myproperties'),
	path('acceptedtenants.html', views.acceptedtenants, name='acceptedtenants'),
	path('waitlist.html', views.waitlist, name='waitlist'),
	path('addproperty.html', views.addproperty, name='addproperty'),
	path('myprofile.html', views.myprofile, name='myprofile'),
	path('myfits.html', views.myfits, name='myfits'),
	path('applicantprofile.html', views.applicantprofile, name='applicantprofile'),
]