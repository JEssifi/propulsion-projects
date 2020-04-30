from django.db import models
from django.conf import settings

# from apps.tag.models import Tag


class PDF(models.Model):
    id_user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        verbose_name='user',
        related_name="fk_pdf_to_user",
        on_delete=models.CASCADE
    )

    # tag = models.ManyToManyField(
    #     to=Tag,
    #     verbose_name="tag",
    #     related_name="fk_pdf_to_tag",
    #     blank=True,
    #     null= True,
    # )

    PDFfile = models.FileField(upload_to='uploads/')

    title = models.CharField(max_length=200)

    content_text = models.TextField(
        verbose_name="text",
        null=True,
        blank=True,
    )

    content_html = models.TextField(
        verbose_name="html text",
        null=True,
        blank=True,
    )

    date_uploaded = models.DateTimeField(
        verbose_name="upload timestamp",
        auto_now_add=True
    )

    class Meta:
        ordering = ['-date_uploaded']

    def __str__(self):
        return str(self.title)
