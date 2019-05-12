from django.contrib import admin
from restapi.models import Choice
# Register your models here.



class PersonAdmin(admin.ModelAdmin):
  list_display = ('date', 'note_1', 'note_2', 'note_3',"imag_1","imag_1_url")


  def view_homepage_link(self, obj):
    return '<a href="%s" target="_blank">%s</a>' % (obj.homepage, obj.homepage,)
  view_homepage_link.allow_tags = True
  view_homepage_link.short_description = 'Homepage' # Optional

admin.site.register(Choice, PersonAdmin)
