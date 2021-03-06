var structure = $('#structure');
var opened = $('#structure .node.open, #structure > ul');
$('> ul', opened.closest('li, #structure')).show();
opened.parents('ul').show();
structure.find('.node').disableTextSelect(); // zabrání označení položky při dvojkliku
structure.treeview();
$('img.structure-placeholder', structure).hide();

$('#structure .node a.name').click(function (e) {
	if (!e.button && !e.shiftKey) {
		$(this).closest('li').find('> .hitarea').trigger('click');
		e.preventDefault();
	}
});

$('#structure .node a.name').dblclick(function (e) {
	location.href = this.href;
	var t = $(this);
	if ($('> ul', t.closest('li')).is(':hidden'))
	{
		t.click();
	}
});
