function readForm()
		{
		var FullName, nofakeemail;
		
		FullName = document.emaillist.name.value;
		nofakeemail = document.emaillist.email.value;
		

		
		
		if(document.emaillist.radTerms[0].checked)
		{
			document.write("Thank you, " + FullName + ". Your email address will not be added to Patel's Travels e-mailing list.");
		}
			
		else if(document.emaillist.radTerms[1].checked)
		{
			document.write("Thank you, " + FullName + ". You have been added to Patel's Travels e-mailing list and we have your email as " + nofakeemail + ".");
		}
		}
		
		
		
		
		
		
		
		
		
		
		
			
		
	