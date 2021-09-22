class LessonController < ApplicationController
  def index
    @lessons = Lesson.all
  end

  def show
  end
end
