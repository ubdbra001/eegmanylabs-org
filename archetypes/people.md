---
SequenceNumber: {{ SequenceNumber }}
PersonId: {{ PersonId }}
FullName: {{ FullName }}
HeadShotFilename: {{ HeadShotFilename }}
StudyId: {{ StudyId }}
---

![headshot of researcher](/assets/images/headshots/{{ HeadShotFilename }} "{{ FullName }}")

## {{ FullName }}

{% if ReplicatorRole %}
Leads [{{ StudyId }}](/replications/{{ StudyId }})
{% endif %}


{% if ScholarUrl %}[Scholar]({{ ScholarUrl }}){% endif %}
{%- if UniUrl %}[University]({{ UniUrl }}){% endif %}
{%- if LabUrl %}[Lab]({{ LabUrl }}){% endif %}
{%- if OrganizerRole %}[organizer]("organizer"){% endif %}
{%- if ReplicatorRole %}[replicator]("replicator"){% endif %}