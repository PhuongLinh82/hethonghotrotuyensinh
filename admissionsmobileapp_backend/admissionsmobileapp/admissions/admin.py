from django.contrib import admin
from admissions.models import *
from django.utils.html import mark_safe

# Register your models here.
class MajorInline(admin.StackedInline):
    model = Major
    fk_name = 'faculty'


class FacultyAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "website", "introduction", "program", "created_date", "updated_date", "active"]
    search_fields = ["name", "created_date"]
    list_filter = ["name"]
    inlines = (MajorInline, )


class MarkInline(admin.TabularInline):
    model = Major.years.through


class MajorAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "code", "faculty", "created_date", "updated_date", "active"]
    search_fields = ["name", "created_date", "code", "faculty__name"]
    list_filter = ["name", "code", "faculty__name"]
    inlines = (MarkInline, )


class InformationInLine(admin.StackedInline):
    model = Information
    fk_name = "infosection"


class InformationAdmin(admin.ModelAdmin):
    list_display = ["id", "description", "infosection"]
    search_fields = ["id", "infosection__name"]
    list_filter = ["infosection__name"]
    readonly_fields = ["img"]

    def img(self, information):
        return mark_safe("<img src='/static/{url}' width=120/>".format(url=information.image.name))


class InformationSectionAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]
    search_fields = ["name"]
    list_filter = ["name"]
    inlines = (InformationInLine, )

class YearAdmin(admin.ModelAdmin):
    list_display = ["id", "year"]
    search_fields = ["year"]
    list_filter = ["year"]


class CommentsAdmin(admin.ModelAdmin):
    list_display = ["id", "content"]


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ["id", "content"]


class MarkAdmin(admin.ModelAdmin):
    list_display = ["id", "major", "year"]
    search_fields = ["major__name", "year__year"]
    list_filter = ["major__name", "year__year"]


class AdmissionsAppAdminSite(admin.AdminSite):
    site_header = "Hệ thống hỗ trợ tuyển sinh"

admin_site = AdmissionsAppAdminSite("myapp")

"""
admin.site.register(Faculty, FacultyAdmin)
admin.site.register(Major, MajorAdmin)
admin.site.register(Year, YearAdmin)
admin.site.register(InformationSection, InformationSectionAdmin)
admin.site.register(Information, InformationAdmin)
admin.site.register(Comments, CommentsAdmin)
admin.site.register(Questions, QuestionsAdmin)
admin.site.register(Mark, MarkAdmin)
"""

admin_site.register(Faculty, FacultyAdmin)
admin_site.register(Major, MajorAdmin)
admin_site.register(Year, YearAdmin)
admin_site.register(InformationSection, InformationSectionAdmin)
admin_site.register(Information, InformationAdmin)
admin_site.register(Comments, CommentsAdmin)
admin_site.register(Questions, QuestionsAdmin)
admin_site.register(Mark, MarkAdmin)
