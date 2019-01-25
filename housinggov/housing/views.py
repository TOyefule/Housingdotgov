from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Property


def index(request):
    return HttpResponse('<h1>Welcome to HOUSING.GOV Sign up</h1><br><a href="landlord.html">Landlord Sign up</a><br><br><a href="applicant.html">Applicant Sign up</a>')

def landlord(request):
	return HttpResponse('<h1>Welcome Landlord!</h1><br><br><a href="myproperties.html">My properties</a><br><br><a href="acceptedtenants.html">Accepted Tenants</a><br><br><a href="waitlist.html">Wait List</a><br><br><a href="addproperty.html">Add a Property</a>')

def applicant(request): 
	return HttpResponse('<h1>Welcome Applicant!</h1><br><br><a href="myprofile.html">See my profile</a><br><br><a href="myfits.html">See my matches</a><br><br><a href="applicantprofile.html">Fill out my profile</a>')

def globalview(request):
	return HttpResponse('<h1>Here are statistics about our matching algorithm</h1>')

def myproperties(request):
	properties_list = Property.objects()
	return HttpResponse('<h1>My properties</h1>')

def acceptedtenants(request):
	return HttpResponse('<h1>Accepted Tenants</h1>')

def waitlist(request):
	return HttpResponse('<h1>Wait List</h1>')

def addproperty(request):
	return HttpResponse('<h1>Add Property</h1>')

def myprofile(request):
	return HttpResponse('<h1>Fill out/edit my profile</h1>')

def myfits(request):
	return HttpResponse('<h1>Here are some properties you might be a good match for</h1>')

def applicantprofile(request):
	return HttpPresponse('<h1>Fill out/edit my profile</h1>')



