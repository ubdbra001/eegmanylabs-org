+++
SequenceNumber = "{{ SequenceNumber }}"
Anchor = "{{ PersonId }}"
Title = "{{ FullName }}"
Image = "headshots/{{ HeadShotFilename }}"
Tags = [
{%- if CoordinatorRole %} "coordinator", {% endif -%}
{%- if AdvisorRole %} "advisor", {% endif -%}
{%- if SteeringRole %} "steering", {% endif -%}
{%- if ReplicatorRole %} "replicator", {% endif -%} 
]
ScholarUrl = "{{ ScholarUrl }}"
UniUrl = "{{ UniUrl }}"
LabUrl = "{{ LabUrl }}"
StudyId = "{{ StudyId }}"
PersonId = "{{ PersonId }}"
FullName = "{{ FullName }}"
+++