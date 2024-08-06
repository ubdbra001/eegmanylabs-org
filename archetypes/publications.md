+++
SequenceNumber = "{{ DatePublishedNumber }}"
Anchor = "{{ PublicationId }}"
Title = "{{ AuthorsShort }} ({{ PublicationYear }}) {{ Title|truncate(50, True) }}"
Image = "previews/{{ PublicationId }}.pdf.png"
PublicationId = "{{ PublicationId }}"
Authors = "{{ Authors }}"
Journal = "{{ Journal }}"
Year = "{{ PublicationYear }}"
DOI = "{{ DOI }}"
DoiUrl = "https://dx.doi.org/{{ DOI }}"
Pdf = "/assets/pdfs/{{ PublicationId }}.pdf"
Tags = ["{{ Status }}"]
+++
