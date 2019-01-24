from django.db import models

# Create your models here.

class Applicant(models.Model):
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	DOB = models.DateTimeField('DOB')

	current_city_or_county = CharField(max_length=50)
	current_state = CharField(max_length=2)
	current_zip = CharField(max_length=9)
	current_country = CharField(max_length=15)

	veteran_status = BooleanField()

	hcv_recipient = BooleanField()
	VASH = BooleanField()
	other_subsidy = BooleanField()

	# housing grant to resident to landlord

	differently_abled = models.BooleanField()
	hearing_impaired = model.BooleanField()
	deaf = model.BooleanField()
	visually_impaired = model.BooleanField()
	blind = model.BooleanField()
	physically_impaired = model.BooleanField()
	wheelchair = model.BooleanField()
	walker = model.BooleanField()
	intellectually_impaired = model.BooleanField()

class Waitlist(models.Model):
	# Property
	prop = models.ForeignKey(Property, on_delete=models.CASCADE)
	# Applicant
	applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE) 

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

class Property(models.Model):
	property_name = models.CharField(max_length=200)
	property_address1 = models.CharField(max_length=200)
	property_address2 = models.CharField(max_length=200)
	property_state = models.CharField(max_length=2)
	property_zip = models.CharField(max_length=9)
	property_email = models.CharField(max_length=15)

	property_phone = models.CharField(max_length=15)

	year_built = models.DateTimeField('YearBuilt')

	website = models.CharField(max_length=200)

	nonprofit_flag = models.BooleanField()

	has_accessible_unit = models.BooleanField()

	full_waitlist = models.BooleanField()