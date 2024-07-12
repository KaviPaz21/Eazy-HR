import spacy
import contextualSpellCheck
import regex as re

# Load the spaCy model
nlp = spacy.load('en_core_web_sm')

# Add the contextual spell checker to the pipeline
contextualSpellCheck.add_to_pipe(nlp)

def remove_unnecessary_characters(text):
    # Remove all characters except letters, numbers, and some punctuation
    cleaned_text = re.sub(r'[^A-Za-z0-9.,;?!\s@$#&]', '', text)
    return cleaned_text

def context_aware_spell_check(text):
    # Process the text with the spaCy pipeline
    doc = nlp(text)
    
    # Check if the spell checker is correctly loaded
    if not doc.has_extension("contextual_spellCheck"):
        raise ValueError("Contextual spell checker not correctly added to the spaCy pipeline.")

    corrected_text = doc._.outcome_spellCheck
    return corrected_text

def preprocess_text(text):
    # Step 1: Remove unnecessary characters
    cleaned_text = remove_unnecessary_characters(text)
    #print("Cleaned text:", cleaned_text)
    
    # Step 2: Context-aware spell checking
    corrected_text = context_aware_spell_check(cleaned_text)
    print("Corrected text:", corrected_text)
    
    return corrected_text

# Test the function
input_text = """age 1
[Company Name] QUOTATION

[Street Address)

[City, ST ZIP)

Phone: (000) 000-0000 QUOTE = DATE

Fax: (000) 000-0000 2034 2H2017

[E-mail Address] CUSTOMER ID VALID UNTIL

‘y3H201F

CUSTOMER INFO Prepared Bi:

[Name]

[Company Name]

[Street Address]

{City,ST ZIP]

[Phone, E-mail] DESCRIPTION OF WORK ITEMIZED cosTs ‘ary | UNM PRICE ‘AMOUNT Service Fee 1 20000 200.00 Labor: hours at $75¢hr 5 75.00 375.00 Parts, including sales tax 7 1295 90.85 New cient discount (6000) (6000)

Thankwoe bor pace business! SUBTOTAL 615.65 OTHER - TOTALQUOTE $ 615.65,

This quotation is not a contract or a bill. tis our best quess at the total price for the service and goods described above.

The customer will be billed after indicating acceptance of this quote. Payment will be due prior to the delivery of service

and goods. Please fax or malthe signed quote to the address listed above.

Customer Acceptance

«

‘Signature Printed Name Date

tyou have any questions, please contact [Name, Phone, email@address.com]

Quote Template © 2017 by Vertexd2.com hetpetdwurw.verter$2.comExcelTemplatestquate-template hel"""
preprocessed_text = preprocess_text(input_text)
#print("Original text:", input_text)
#print("Preprocessed text:", preprocessed_text)
