---
SequenceNumber: {{ SequenceNumber }}
PersonId: {{ PersonId }}
FullName: {{ FullName }}
HeadShotFilename: {{ HeadShotFilename }}
StudyId: {{ StudyId }}
---
<a name="{{ PersonId }}">
![headshot of researcher](/assets/images/headshots/{{ HeadShotFilename }} "{{ FullName }}")

## {{ FullName }}


{% if ReplicatorRole %}
Leads [{{ StudyId }}](/replications/#{{ StudyId }})
{% endif %}


{% if ScholarUrl %}[Scholar]({{ ScholarUrl }}) {% endif %}
{%- if UniUrl %}[University]({{ UniUrl }}) {% endif %}
{%- if LabUrl %}[Lab]({{ LabUrl }}) {% endif %}
{%- if CoordinatorRole %}[Coordinator]("coordinator") {% endif %}
{%- if AdvisorRole %}[Advisory Board]("advisor") {% endif %}
{%- if SteeringRole %}[Steering Group]("steering") {% endif %}
{%- if ReplicatorRole %}[Replicator]("replicator") {% endif %}
