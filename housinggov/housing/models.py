from django.db import models

# Create your models here.

class Applicant(models.Model):
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	DOB = models.DateTimeField('DOB')

	current_city_or_county = models.CharField(max_length=50)
	current_state = models.CharField(max_length=2)
	current_zip = models.CharField(max_length=9)
	current_country = models.CharField(max_length=15)

	veteran_status = models.BooleanField()

	hcv_recipient = models.BooleanField()
	VASH = models.BooleanField()
	other_subsidy = models.BooleanField()

	# housing grant to resident to landlord

	differently_abled = models.BooleanField()
	hearing_impaired = models.BooleanField()
	deaf = models.BooleanField()
	visually_impaired = models.BooleanField()
	blind = models.BooleanField()
	physically_impaired = models.BooleanField()
	wheelchair = models.BooleanField()
	walker = models.BooleanField()
	intellectually_impaired = models.BooleanField()

class Property(models.Model):
	property_name = models.CharField(max_length=200)
	property_address1 = models.CharField(max_length=200)
	property_address2 = models.CharField(max_length=200)
	property_state = models.CharField(max_length=2)
	property_zip = models.CharField(max_length=9)
	property_email = models.CharField(max_length=15)

	property_phone = models.CharField(max_length=15)

	year_built = models.CharField(max_length=15)

	website = models.CharField(max_length=200)

	nonprofit_flag = models.BooleanField()

	has_accessible_unit = models.BooleanField()

	full_waitlist = models.BooleanField()

class Landlord(models.Model):
	prop = models.ForeignKey(Property, on_delete=models.CASCADE)
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	company_name = models.CharField(max_length=200)

	landlord_address1 = models.CharField(max_length=200)
	landlord_address2 = models.CharField(max_length=200)
	landlord_state = models.CharField(max_length=2)
	landlord_zip = models.CharField(max_length=9)


	website = models.CharField(max_length=200)

	nonprofit_flag = models.BooleanField()



class Waitlist(models.Model):
	# Property
	prop = models.ForeignKey(Property, on_delete=models.CASCADE)
	# Applicant
	applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE) 
