+++
SequenceNumber = "{{ SequenceNumber }}"
Anchor = "{{ StudyId }}"
Title = "{{ Title|truncate(50, True) }}"
Image = "figures/{{ StudyId }}.png"
StudyId = "{{ StudyId }}"
LeadFullName = "{{ LeadFullName }}"
PersonId = "{{ PersonId }}"
Reference = "{{ Reference }}"
PsychConstruct = "{{ PsychConstruct }}"
SignupUrl = "{{ SignupUrl }}"
Tags = ["{{ StageName }}"]
+++

Lead by [{{ LeadFullName }}](/people/#{{ PersonId }})
{% if NeedsMoreLabs %}
[Sign-up form]({{ SignupUrl }})
{% endif %}

> {{ Abstract|truncate(200, True) }}