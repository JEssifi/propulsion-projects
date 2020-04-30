from django.db import models
from django.conf import settings

from apps.document.models.pdf import PDF


class Tag(models.Model):
    id_user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        verbose_name='user',
        related_name="fk_tag_to_user",
        on_delete=models.CASCADE
    )
    pdf = models.ManyToManyField(
        to=PDF,
        verbose_name="pdf",
        related_name="fk_tag_to_pdf",
        blank=True,
        null= True,
    )
    title = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    parent_tag = models.ForeignKey(
        to='self',
        related_name='fk_tag_to_tag',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    date_created = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True
    )
    date_updated = models.DateTimeField(
        verbose_name="updated",
        auto_now=True
    )

    class Meta:
        ordering = ['-date_updated']

    def __str__(self):
        return str(self.title)